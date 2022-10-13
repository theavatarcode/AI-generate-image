#MTAyOTgxMzc1MDYxOTk4Mzk0Mw.GEdJO4.NRwG1t7xUc5Iajy2ZzCD_ggtUIRJqV7D9YyHFA
from generate import Generate
import discord
from discord.ext import commands
from PIL import Image

# def start(arg):
#     G = Generate(arg)
#     img = Image.open(G.gen())
    


intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.command()
async def gen(ctx, arg):
    g = Generate(arg)
    g.gn()
    await ctx.send(file=discord.File('output.png'))

bot.run('MTAyOTgxMzc1MDYxOTk4Mzk0Mw.GEdJO4.NRwG1t7xUc5Iajy2ZzCD_ggtUIRJqV7D9YyHFA')