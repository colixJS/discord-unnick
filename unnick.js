const Discord = require("discord.js");

module.exports = {
    name: "unnick",
    description: "Resetar nick dos usuários",

    run: async (client, interaction) => {
        if (!interaction.member.permissions.has(Discord.PermissionFlagsBits.ManageNicknames)) {
            return interaction.reply({
                embeds: [
                    new Discord.EmbedBuilder()
                        .setColor("Red")
                        .setDescription("Sem permissões.")
                ],
                ephemeral: true
            });
        }


        interaction.guild.members.cache.forEach(async member => {
            if (!member.user.bot) {
                await member.setNickname("").catch(() => { return; });
            }
        });

        await interaction.reply({
            embeds: [
                new Discord.EmbedBuilder()
                    .setColor("Green")
                    .setDescription(`Nicknames resetados com sucesso!`)
                    .setTimestamp()
            ],
            ephemeral: true
        });
    }
};
