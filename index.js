require('dotenv').config();
const config = require('./config');
const {Client, MessageEmbed } = require('discord.js');
const client = new Client();

client.on('message', (message) =>{
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if (message.author.bot) return;

    if (command == 'help'){
        message.channel.send('Olá estranho, estou aqui para lhe ajudar ' + message.author.username)   
    }

    else if (command == 'about-me'){
        const embedProfile = new MessageEmbed()
        .setTitle('Sobre ' + message.author.username)
        .addField('Usuário', message.author.username, true)
        .addField('Tag', message.author.discriminator, false)
        .addField('Foto', message.author.avatarURL(), false)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter('Você usou comando Litch, é os guri')
        .setColor('RED')
        .setDescription('Um sobre a conta do ' + message.author.username)

        message.channel.send(embedProfile);
    }
    else if (command == 'chamar') {
        let _user = args[0]

        message.reply('Me invocou? ');
    }
})

client.login(process.env.TOKEN).then(() => {
    console.log(`Estou logado na conta ${client.user.tag}`)
}).catch(() => {
    console.log('Erro no login...')
})