module.exports = async (bot, message) => {

    const content = bot.channels.cache.get("1195770557510189146"); // айди вашего канала с логами

    console.log()
    console.log()
    console.log("---------------------------|Log|--------------------------------------")
    console.log()
    console.log(content + message.author.username /*user.username*/ + ": " + message.content)
    console.log()
    console.log("channel ID: " + message.channel)
    console.log()
    console.log("---------------------------|Log|--------------------------------------")
    console.log()
    console.log()

};