
from generate import Generate
import discord
from discord.ext import commands
from PIL import Image

intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='!', intents=intents)

@bot.command()
async def gen(ctx, arg):
    g = Generate(arg)
    g.gn()
    await ctx.send(file=discord.File('output.png'))

bot.run('Token')