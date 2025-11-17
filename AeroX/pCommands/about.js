const { 
  ContainerBuilder, 
  TextDisplayBuilder,
  SeparatorBuilder,
  MediaGalleryBuilder,
  MediaGalleryItemBuilder,
  ButtonBuilder,
  ButtonStyle,
  ActionRowBuilder,
  MessageFlags,
  SeparatorSpacingSize
} = require("discord.js");

module.exports = {
  name: 'about',
  description: 'Shows information about Vermont State Music',
  
  async execute(message) {
    const client = message.client;
    const container = new ContainerBuilder();

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `# <:vrmt:1439933814041477150> About Vermont State Music`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `<:white_musicnote:1437500139127443507> **Vermont State Music** - A powerful Discord music bot designed to bring high-quality music streaming to your server. Enjoy seamless playback, custom playlists, and a rich set of features to enhance your listening experience.`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `**Key Features**\n<:reply:1437500099553919129> High-quality music streaming\n<:reply:1437500099553919129> Custom playlists & favorites\n<:reply:1437500099553919129> Advanced audio filters\n<:reply:1437500099553919129> Queue management\n<:reply:1437500099553919129> Lyrics support\n<:reply:1437500099553919129> Spotify integration`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `**Built With**\n<:dots:1437500069292150835> Discord.js v14\n<:dots:1437500069292150835> Node.js\n<:dots:1437500069292150835> Lavalink\n<:dots:1437500069292150835> SQLite Database`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addMediaGalleryComponents(
      new MediaGalleryBuilder().addItems(
        new MediaGalleryItemBuilder().setURL("https://media.discordapp.net/attachments/1430646260032999465/1437530695089000519/MUSICIANGUY.png?ex=69139449&is=691242c9&hm=a73a38ba655f66c48066c5dddf817a874763bb4bb84c062528f06613d66e06e5&=&format=webp&quality=lossless")
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setDivider(true).setSpacing(SeparatorSpacingSize.Small)
    );

    container.addTextDisplayComponents(
      new TextDisplayBuilder().setContent(
        `-# Credits: AeroX Development`
      )
    );

    container.addSeparatorComponents(
      new SeparatorBuilder().setSpacing(SeparatorSpacingSize.Small)
    );

    container.addActionRowComponents(
      new ActionRowBuilder().addComponents(

        new ButtonBuilder()
          .setURL(`https://discord.gg/vrmt`)
          .setLabel(`Vermont State Roleplay`)
          .setStyle(ButtonStyle.Link)
      )
    );

    await message.reply({
      components: [container],
      flags: MessageFlags.IsComponentsV2,
    });
  }
};

/*
: ! Aegis !
    + Discord: itsfizys
    + Portfolio: https://itsfiizys.com
    + Community: https://discord.gg/8wfT8SfB5Z  (AeroX Development )
    + for any queries reach out Community or DM me.
*/
