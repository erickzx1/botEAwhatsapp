const fs = require('fs-extra')
const { 
    prefix
} = JSON.parse(fs.readFileSync('./settings/setting.json'))

/*

Por favor, não remova meu link do github, você precisa do seu apoio! obrigado.

*/

exports.textTnC = () => {
    return `
    Código-fonte / bot é um programa de código aberto (gratuito) escrito em Javascript, você pode usar, copiar, modificar, combinar, publicar, distribuir, sublicenciar e ou vender cópias sem remover o autor principal do código-fonte / bot.

Ao usar este código-fonte / bot, você concorda com os seguintes Termos e Condições:
- O código-fonte / bot não armazena seus dados em nossos servidores.
- O código-fonte / bot não é responsável por seu pedido para este bot.
- Código-fonte / bot que você pode ver em https://github.com/ArugaZ/whatsapp-bot

Instagram: https://instagram.com/ini.arga/

Atenciosamente, ArugaZ.`
}

/*

Por favor, não remova meu link do github, você precisa do seu apoio! obrigado.

*/

exports.textMenu = (pushname) => {
    return `
Olá, ${pushname} 👋️,Sou o EA Bot!
Aqui estão alguns dos recursos deste bot!✨

Criador:

- *${prefix}cooltext*
- *${prefix}sticker* - envie uma foto com este comando na legenda!!!
- *${prefix}stickergif* - envie um gif com este comando na legenda!!!
- *${prefix}stickergiphy*
- *${prefix}meme*
- *${prefix}quotemaker*
- *${prefix}nulis*

(Ignora)
- *${prefix}infosurah*
- *${prefix}surah*
- *${prefix}tafsir*
- *${prefix}ALaudio*
- *${prefix}jsolat*

(Ignora)
- *${prefix}nekopoi*

Menu de diversão (grupo):
- *${prefix}simisimi*
- *${prefix}katakasar*
	┷- *${prefix}klasmen*

Baixar:
- *${prefix}ytmp3*
- *${prefix}ytmp4*
- *${prefix}facebook*

(Ignora)
- *${prefix}cekzodiak*
- *${prefix}artinama*
- *${prefix}cekjodoh*

Pesquise algo:
- *${prefix}dewabatch*
- *${prefix}images*
- *${prefix}sreddit*
- *${prefix}resep*
- *${prefix}stalkig*
- *${prefix}wiki*
- *${prefix}cuaca*
- *${prefix}chord*
- *${prefix}lirik*
- *${prefix}ss*
- *${prefix}play*
- *${prefix}movie*
- *${prefix}whatanime*

Texto Aleatório:
- *${prefix}motivasi*
- *${prefix}howgay*
- *${prefix}fakta*
- *${prefix}pantun*
- *${prefix}katabijak*
- *${prefix}quote*
- *${prefix}cerpen*
- *${prefix}cersex*
- *${prefix}puisi*

Imagens Aleatórias:
- *${prefix}anime*
- *${prefix}kpop*
- *${prefix}memes*

Outras:
- *${prefix}tts*
- *${prefix}translate*
- *${prefix}resi*
- *${prefix}covidindo*
- *${prefix}ceklokasi*
- *${prefix}shortlink*
- *${prefix}bapakfont*
- *${prefix}grouplink*
- *${prefix}revoke*

Sobre o bot:
- *${prefix}tnc*
- *${prefix}donasi*
- *${prefix}botstat*
- *${prefix}ownerbot*
- *${prefix}join*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

Dono do Bot:
- *${prefix}ban* - banido
- *${prefix}bc* - promoção
- *${prefix}leaveall* - sair de todos os grupos
- *${prefix}clearall* - deletar todos os chats

Espero que você tenha um ótimo dia,bot feito com muito carinho!✨
by: @erickzx1 and @augusto`
}

/*

Por favor, não remova meu link do github, você precisa do seu apoio! obrigado.

*/

exports.textAdmin = () => {
    return `
⚠ [ *Somente Administradores do Grupo* ] ⚠ 
A seguir estão os recursos de administração de grupo disponíveis neste bot!

- *${prefix}add* - adicionar alguém
- *${prefix}kick* @tag - banir alguém
- *${prefix}promote* @tag - promover alguém
- *${prefix}demote* @tag  - rebaixar alguém
- *${prefix}mutegrup* - mutar o grupo
- *${prefix}tagall* - marcar todos do grupo
- *${prefix}setprofile* 
- *${prefix}del*
- *${prefix}welcome*

_-_-_-_-_-_-_-_-_-_-_-_-_-_

⚠ [ *Grupo proprietário apenas:* ] ⚠
Aqui estão os recursos do proprietário do grupo neste bot!
- *${prefix}kickall* - remover todos
*O grupo proprietário é o criador(a) do grupo.*
by: @erickzx1 and @augusto
`
}

/*

Por favor, não remova meu link do github, você precisa do seu apoio! obrigado.

*/

exports.textDonasi = () => {
    return `
Olá, obrigado por usar este bot, para apoiar este bot, ajude com alguma contribuição:

https://trakteer.id/arugabot

Ore para que o projeto do bot continue crescendo
Ore por ideias mais criativas para o autor do bot

A doação será usada para o desenvolvimento e operação deste bot.
Traduzido para Português por @Erickzx1 e @Augusto!!!

Baseado no Bot Indonésio do ArugaZ`
}
