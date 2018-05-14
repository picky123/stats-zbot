const Discord = require("discord.js");
const client = new Discord.Client();
const token = 'NDQzNzc5NjUwODk2Nzg5NTA0.DdSVhg.v4ALCCw3s1xRwraZBtYjZ-ePzIE'

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.login('NDQzNzc5NjUwODk2Nzg5NTA0.DdSVhg.v4ALCCw3s1xRwraZBtYjZ-ePzIE');

client.on('ready', () => {
  client.user.setGame('Stats-Servers.', 'https://www.twitch.tv/streamerhouse')
})

client.on('guildMemberAdd', member => {
    member.guild.channels.get('443419618724413452').setName(`🔰 Total-Members: ${member.guild.memberCount}`);
});

client.on('guildMemberRemove', member => {
    member.guild.channels.get('443419618724413452').setName(`🔰 Total-Members: ${member.guild.memberCount}`);
});
