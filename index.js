//ctrl + c     Stop Server
//View Terminal
//npm init
//npm install discord.js
//node index.js(FileName)

/*
  Name: Noah Scott
*/


//chalk npm file
const chalk = require('chalk');

console.log(chalk.blue('Hello world!'));

//discord.js npm file
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => { //Function
  console.log(`Logged in as ${client.user.tag}!`);
});

const PREFIX = "?"

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
  else
  {
    let args = msg.content.substring(PREFIX.length).split(" ");
    console.log(args)

    switch(args[0])
    {
        case 'website':
            msg.channel.send("http://www.youtube.com/user/kir10s");
            break;
        case 'avatar':
            msg.reply(msg.author.displayAvatarURL());
            break;
        case 'clear':
            if(!args[1])
            {
                return msg.reply("error please define a second parameter")
            }
            else
            {
                //?clear 5
                msg.channel.bulkDelete(args[1]);
                break;
            }

    }
  }

});





client.login('ODM5OTEzMTQ0MjI2OTM4OTAw.YJQkEg.t6KvK-FN2eij0YgwRgNnbiIHoWQ');