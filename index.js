const { create, Client } = require('@open-wa/wa-automate')
const figlet = require('figlet')
const options = require('./utils/options')
const { color, messageLog } = require('./utils')
const HandleMsg = require('./HandleMsg')

const start = (aruga = new Client()) => {
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('ERICK BOT', { font: 'Ghost', horizontalLayout: 'default' })))
    console.log(color(figlet.textSync('----------------', { horizontalLayout: 'default' })))
    console.log(color('[DEV]'), color('Erickzx1', 'yellow'))
    console.log(color('[~>>]'), color('BOT ATIVO!', 'green'))

    // Mantém a sessão ligada
    aruga.onStateChanged((state) => {
        console.log(color('[~>>]', 'red'), state)
        if (state === 'CONFLITO' || state === 'NÃO LANÇADO') aruga.forceRefocus()
    })

    // quando bots são convidados para grupos
    aruga.onAddedToGroup(async (chat) => {
	const groups = await aruga.getAllGroups()
	// Quando o limite do grupo de bots for atingido, altere-o no arquivo settings / settings.json
	if (groups.length > groupLimit) {
	await aruga.sendText(chat.id, `Desculpe, o grupo neste Bot está cheio\nGrupo máximo é: ${groupLimit}`).then(() => {
	      aruga.leaveGroup(chat.id)
	      aruga.deleteChat(chat.id)
	  }) 
	} else {
	// condição quando o limite de membros do grupo não for atingido, altere-o no arquivo settings / settings.json
	    if (chat.groupMetadata.participants.length < memberLimit) {
	    await aruga.sendText(chat.id, `Desculpe, o bot sai se os membros do grupo não excederem ${memberLimit} pessoas`).then(() => {
	      aruga.leaveGroup(chat.id)
	      aruga.deleteChat(chat.id)
	    })
	    } else {
        await aruga.simulateTyping(chat.id, true).then(async () => {
          await aruga.sendText(chat.id, `Eu sou Erick Bot. Para descobrir os comandos neste tipo de bot ${prefix}menu`)
        })
	    }
	}
    })

    // quando alguém entra / sai do grupo
    aruga.onGlobalParicipantsChanged(async (event) => {
        const host = await aruga.getHostNumber() + '@c.us'
		const welcome = JSON.parse(fs.readFileSync('./settings/welcome.json'))
		const isWelcome = welcome.includes(event.chat)
		let profile = await aruga.getProfilePicFromServer(event.who)
		if (profile == '' || profile == undefined) profile = 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTQcODjk7AcA4wb_9OLzoeAdpGwmkJqOYxEBA&usqp=CAU'
        // condição quando alguém convida / entra no grupo por meio do link
        if (event.action === 'add' && event.who !== host && isWelcome) {
			await aruga.sendFileFromUrl(event.chat, profile, 'profile.jpg', '')
            await aruga.sendTextWithMentions(event.chat, `Olá bem-vindo ao grupo @${event.who.replace('@c.us', '')} \n\nDivirta-se conosco✨`)
        }
        // a condição quando alguém clica / sai do grupo
        if (event.action === 'remove' && event.who !== host) {
			await aruga.sendFileFromUrl(event.chat, profile, 'profile.jpg', '')
            await aruga.sendTextWithMentions(event.chat, `Adeus @${event.who.replace('@c.us', '')}, Nós sentiremos sua falta✨`)
        }
    })

    aruga.onIncomingCall(async (callData) => {
        // quando alguém liga para o número, o bot envia uma mensagem
        await aruga.sendText(callData.peerJid, 'Desculpe, não consigo receber chamadas.\n\n-bot')
        .then(async () => {
            // o bot irá bloquear aquele número
            await aruga.contactBlock(callData.peerJid)
        })
    })

    // quando alguém manda uma mensagem
    aruga.onMessage(async (message) => {
        aruga.getAmountOfLoadedMessages() // limpe o cache de mensagens se já houver 3.000 mensagens.
            .then((msg) => {
                if (msg >= 4000) {
                    console.log('[erickzx1]', color(`Alcance da mensagem carregada ${msg}, cortando cache de mensagens...`, 'yellow'))
                    aruga.cutMsgCache()
                }
            })
        HandleMsg(aruga, message)    
    
    })
	
    // Log de mensagens para análise
    aruga.onAnyMessage((anal) => { 
        messageLog(anal.fromMe, anal.type)
    })
}

//criar sessão
create(options(true, start))
    .then((aruga) => start(aruga))
    .catch((err) => new Error(err))
