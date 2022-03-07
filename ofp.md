---
layout: default
title: Oxidized Feather Pen documentation
---

# Contents
{: .no_toc}

* TOC
{:toc}

# Server guide

## A new player's guide to the Oxidized Feather Pen Minecraft server

Hello and welcome! We are an unofficial Rusty Quill fan Minecraft server, set up by me - Holly/PurpleCho. We are not associated with RQ, this is simply a space set up by RQ fans to hang out and play with other RQ fans.

The information on our Discord server had become difficult to navigate, so it's been combined into this one page off-server to make that easier. We're also in the process of updating this info; if you spot anything obviously wrong please let us know on Discord but we may already be working on it 💜

## General server information

We play on a lightly-modded Java edition server. This is fully compatible with the unmodified ("vanilla") Java edition client, but Java edition in general is not compatible with Bedrock edition (ie consoles, mobile, and Windows 10 edition). Java edition will theoretically run on any computer with Java - this includes Windows, MacOS, and Linux. If you have a Windows 10 computer, that means your computer can run both Windows 10 edition (ie Bedrock) and Java edition, though probably not at the same time. Full details about the server-side mods, datapacks, and other gamerule changes we're running are in the [changes from vanilla](#changes-from-vanilla) section.

At the time of writing, we are *currently* running Minecraft 1.17.1, on Hard difficulty, and will shortly be starting afresh in a new world that will run Minecraft 1.18.2. Our current world seed is `-5975211176306088748`.

If your game has updated itself past the server's current version, Mojang provides [instructions on loading a different version of the game][ver]. When new Minecraft versions come out, we don't usually update right away - this is so that there's time for the mods we use to have compatible updates available. Updating can be a fiddly process, so unless there are big changes that we want to include we won't always bother updating to a new minor version (1.14, 1.15, 1.16, etc are "major" versions. 1.16.1, 1.16.2, etc are "minor" versions). This means that it's not uncommon for your Minecraft launcher to try to run a different version than the server.

The server runs a whitelist, ie you can only connect to it once you've been added to the list. This is so that we don't need to worry about any trolls stumbling across the server and causing problems before an admin can do anything about it. It does mean, though, that you'll need to wait for one of us to add you to the whitelist before you can play. Depending on time zones and our availability, this may take several hours.

Since this has come up at least once: the server relies on authenticating user accounts against Mojang's own servers. If you are playing a "free" version of Minecraft such as TLauncher, that **will not work** on this server since that is pirated and not linked to a Mojang account (or a Microsoft account, as and when accounts get migrated across).

Running the server involves some costs, ie renting the use of the actual server. Contributions towards running costs are entirely voluntary; not everyone can afford to chip in, and that's fine. If you can afford it and want to chip in, though, I have a [Ko-fi][kofi] for it. It's linked to a PayPal account that is only used for funding this server. Ko-fi will only take donations in multiples of $3 since I'm using their free tier, and please note that even if you choose Ko-fi's anonymous option, PayPal will still show me the name and email address given on your account. I don't generally pay any attention to those details, but I know not everyone is comfortable with online and "real-life" names being connected in any way.

## Joining the Minecraft server

To request that we add you to the whitelist, please put your Minecraft username in the `#in-game-usernames` channel on Discord. We'll let you know once we have whitelisted your account. Please be aware that if those with whitelisting permissions are unavailable it may take some time but we will do it as soon as we're able. If it's been more than a day, please ping me in `#general` with a reminder. I promise I'm not ignoring you, but if I see a new username and can't add it right away, e.g. because I'm at work, by the time I have a moment to add you there's a chance it will slip my mind.

The server address is `ofp.apexmc.co` - from the "multiplayer" screen click "add server" and use this address. The "server name" field only affects how it's listed on your computer.

If you have any problems joining after you've been added to the whitelist, please ping me so I can try to help troubleshoot.

## Finding your way around

*Note: aside from utilities like teleport mods, this info is specific to the current world and will be outdated when we update*

The server is running a few mods which allow easy teleportation to "warps" (created by admins for everyone to use) and "homes" (created by players for their personal use). Teleportation instructions are in the [Homes, warps, and TPA](#homes-warps-and-tpa) section below. Many of us teleport around because it's convenient, but there are other ways to get around too.

Various parts of the server are connected via portals that go to the roof of the Nether - this makes for fairly quick travel over long Overworld distances, and the bedrock of the Nether roof is not spawnable, so unless people build stuff that they don't spawn-proof there will be no hostile mobs to worry about. I've started placing carpets as pathways from one portal to the next, so if you want something connecting into that path system please let me know.

On our existing world, the best place to head to first is the [community mushroom island](#community-mushroom). You can use the `mushroom` warp to teleport there. If you prefer to travel the old-fashioned way, to get there from spawn, go up the water elevator built from netherrack, and through the portal at the top (the other portal, at ground level, goes to the main part of the nether rather than the roof). Follow the lime carpet path, and that'll take you to the community mushroom island's portal.

We originally used the `#location-claims` channel on Discord to let each other know where we were setting up our bases. Nepenthe has very kindly made [a Google Spreadsheet which we now use][buildsheet] instead to record who's building at which coordinates. For when we update to 1.18 we're also looking into other tools which might let us show our base coordinates on an online map.

### Community mushroom

Here you can find the original campsite we set up when we started the server, as well as some farms and small houses that a few folks have started to build. Nepenthe shared a labelled [map of the island][mushroom] on Discord (note that the portal is partway along the path marked "to homes", as you exit the portal the homes are to your left and everything else is to your right). The storage area is underground, with the entrance next to the tree farm. Drop off any resources you don't want/need, and help yourself to what others have left in the storage area. As far as I know, all the farms on the community mushroom island are there for anybody to use - just make sure to re-plant things when you're done. This *excludes* any small farm areas people have made next to their houses.

### The rest of the server

Outside of the mushroom island we're fairly scattered about, and not everywhere is connected via the Nether because people have largely been getting around by using the Homes mod (and datapack before that) for teleporting. We don't officially have a map of where everyone is, but we *do* have [a Google spreadsheet][buildsheet] where people can record the coordinates of their base or any other point of interest - it's also pinned in the `#location-claims` channel on Discord. There are some older maps floating around in that channel too, but people have joined since they were made and not everyone is still active. Once you find somewhere you want to set up your base, go ahead and add it to the spreadsheet so folks know where to find you (or where's already taken, if they're looking for somewhere to build).

## Tips and tricks

The Homes mod we use is incredibly handy for getting around, details in the [Changes from vanilla](#changes-from-vanilla) section. Most of us have a Home set at the community mushroom, though that's not necessary since we added the Warps mod as well.

If you want to get an idea where to find various things such as specific biomes or generated structures, the world seed is listed above in [General server information](#general-server-information) (also pinned in `#location-claims`) and you can throw that into a biome map or similar tool (I like [Chunkbase][chunkbase], personally, but there are plenty out there).

Plenty of folks like to use client-side mods such as map mods. If they're compatible with vanilla servers they likely won't cause any issues. Where we're running a few server-side mods that have client-side equivalents, version numbers are in [Server-side mods](#server-side-mods) so that you can install matching versions if you want to.

We have several datapacks and mods that add useful functionality - full details in [Changes from vanilla](#changes-from-vanilla) - but ones worth highlighting are the coordinates HUD and the Nether portal calculations.

To create portals on the Nether roof, your best bet is to go through one of the existing portals up there then build yours at the right x/z coordinates. Unless you're very close to someone else's base, it ought to link up just fine. It's possible to have 2 separate portals - one to the roof and one to the main Nether - but it can be fiddly to calculate where to put them to avoid problems linking them up.

# Rules

1. Don't be a jerk - this should go without saying but putting it here as the first and most important rule. Everyone should be able to feel comfortable here. But also please try to assume good faith, as tone can be hard to convey in text at times and especially so if English is not a person's first language

2. Let's keep this family-friendly  - it's not reasonable to check how old people are, especially since Minecraft is for all ages and initial invites are going to the RQ Official Discord which also has children online  
  - This also applies to nicknames and profile pictures!


3. No political topics please - there are plenty of other places to have those conversations, we're just here to have fun in Minecraft

4. Mild swears are okay but if someone asks you to edit or remove a swear please do - remember that how strong a word is considered to be varies in different places and what you think is mild may be much stronger to other users. Terms relating to genitalia are specifically not okay

5. We have a very small moderation team, and even if we're in different time zones we can't be online 24/7. If something needs mod attention please @ either me or the moderators role, or DM me with context, and we'll try to check it out ASAP. In the meantime please remember it's fine to take a step back from topics you're not comfortable with

6. We have a mix of new and more experienced players, so please don't be rude about how familiar or unfamiliar anyone is with the game and its mechanics! Even if information is easily available on the [Minecraft wiki][wiki], there is a lot to remember. Pointing someone in the right direction takes little effort, or if you can spare the time/energy for an explanation that may be very welcome

8. You are welcome to use client-side mods for quality of life improvements too, but not ones that cheat items into the game

1. Usernames to be added to the Minecraft whitelist (so that you can connect to the server) must be posted in the `#in-game-usernames` channel on Discord

3. Pranks are fine if you're sure the other person is comfortable with being pranked. Griefing is not okay. If an attempt at a prank ends up not being funny for the person being pranked, apologise. Where possible please make an effort to help clear up your pranks afterwards (time zones might make this hard, I know)

8. Players who wish to have one (and can afford a 2nd account) are allowed a "camera account" ie a second account that's in spectator mode. This can be handy for getting a better perspective on builds, or for troubleshooting contraptions, or searching underground for spawners. If possible these may also be given the ability to use a few commands so they can teleport themselves or to have the night vision; not yet sure if this is doable without giving them a lot more permissions than needed

# Changes from vanilla

## Gamerule changes
- *Keep inventory* is enabled. When you die, you respawn with all your gear and levels intact
- *Fire tick* is disabled. Fire does not spread or burn out by itself
- *Players sleeping percentage* is set to 1, so that only 1 player needs to sleep for the night to be skipped

## Crafting changes
- *Re-dying blocks* Other than concrete, dyed blocks can be re-dyed by crafting the items with a dye. Wool is 1 block per dye, all others are 8 items/blocks per dye.
- *Trapdoors* Crafting recipes give 6 trapdoors per recipe rather than the default 2. This brings it in line with doors (3 per recipe)
- *Uncrafting blocks* For better storage, various blocks can be "uncrafted" back to items or less compact forms: blue ice to packed ice to ice; nether wart; quartz; wool to string
- *Spore blossom and bundle in survival* These are normally creative mode only until 1.18;  you can craft spore blossom from 1 allium + 1 big dripleaf, bundle from 2 string and 6 rabbit hide (**Note that when we go to 1.18 spore blossoms will generate in the world so we'll remove the crafting recipe; bundle crafting will still be available**)

## Mob behaviour changes
- *Endermen* can't pick up any blocks
- *Shulkers* drop 2 shells each when killed, and can respawn
- *Ender dragon* should drop an egg every time, as well as elytra for all those in the fight; this has not been thoroughly tested and may be unreliable

## Other simple changes
- *AFK display* Usernames on the tab screen will turn grey after a short period of not moving, to make it clear when a player is AFK
- *Creeper anti-griefing* Creeper explosions do not break blocks, though they do still hurt players and other entities. Before we updated to 1.16.2 this was the case for all explosions; be aware that TNT, ghast fireballs, etc now break blocks as normal 

## Useful other tools
### Coordinates HUD
A simple overlay above the XP bar, showing your coordinates and which compass direction you're facing. Toggle it on or off with `/trigger ch_toggle`

### Nether portal calculations
Check the positioning for portals to link up exactly. Use `/trigger nc_inOverworld` if you're currently in the Overworld and want to see where the Nether side should be. Use `/trigger nc_inNether` if you're currently in the Nether and want to check where the Overworld side should be 

### Torch auto-lighting
This is a utility which will use torches you already have to light either the surface or the caves within 128 blocks of the player in all directions. It works as follows:

- "Place" a torch in mid air using your main hand. Nothing happens if it's in your offhand
- If you want to light caves, you need to have another torch in your offhand when you do that
- If you want to light the surface, you need to have grass (item not block) in your offhand when you do that
- Your held torches will get an enchantment glint and you'll see torches flying out from in front of you
- These will be automatically placed in dark spots within 128 blocks of the player in all directions, including vertically. This will be just "caves" or just "surface" depending what was in your offhand; it decides which is which based on whether the block gets any sky lighting
- Stop it at any point by right-clicking again with your held torch. This can be in the air or against a block, it doesn't matter
- Torches will be used first from your hotbar slots to the right of your held item, then from your inventory, then from your offhand, then the hotbar to the left of your held item. Main hand torches will not be used
- It will continue until either you run out of usable torches or you choose to stop it (as above)
- If you move while it's active, it will place torches in the areas that are newly in range
- Torch placement gets much slower over time, as it searches for the last remaining dark spots

### Homes, warps, and TPA
You can set up to 10 "home" locations in total across all dimensions (Overworld, Nether, End) and teleport to them by using commands. Note that the names you give your homes are case sensitive - they will not work if you change up the capitalisation! Teleporting to a different dimension will glitch out your levels until you gain a little more XP; where possible it's often better to use a portal first then teleport within the same dimension. For each separate type of teleport command (home/lastdeath, warp, tpa) there is a cooldown timer before you can use it again, and the teleport will only happen once you stand still for a couple of seconds - length of the cooldowns and stand-still timer are all settings that I can adjust if we need to

If you've been playing since we were using a datapack instead of a mod, your homes should have been copied across using their old numbers as their names

To teleport to one of your homes, use `/home [name]`, or to see your list of homes type `/homes`. If you don't specify a home name, that's the same as typing `/home main`. Create homes up to the limit of 10 with `/sethome [name]` and delete existing ones with `/delhome [name]`

Warps work the same as homes, just type `/warp [name]` to go there or `/warps` for a list of existing ones. Warps are available to everyone, but can only be set and deleted by admins - if there's somewhere that you'd like added as a warp, let us know! It may take a while for us to get a good set of warps up and running so please be patient - if it's been requested, we'll get to it or let you know if and why we're not adding it

We've now got a mod that allows you to teleport to each other as well:
- `/tpa <player>` - Initiates request for you to teleport to `<player>`
- `/tpahere <player>` - Initiates request for `<player>` to teleport to you
- `/tpacancel [<player>]` - Cancel a tpa or tpahere request you've initiated, player name required if multiple ongoing
- `/tpaaccept [<player>]` - Accept a tpa or tpahere request you've received, player name required if multiple ongoing
- `/tpadeny [<player>]` - Deny a tpa or tpahere request you've received, player name required if multiple ongoing

Requests will time out if they're not accepted within 60 seconds (we can change the setting on that if need be, though)

There is also a `/lastdeath` command which takes you back to where you last died, and `/lastdeath info` to check where and how you died before you decide to teleport back there

### Tree chopping mod
Trees can now be felled by breaking a single log! This should work for all tree types using all axes, the leaves will rapidly decay as well, and you can sneak while using your axe if you actively *don't* want to be breaking more than a single log. There are plenty of settings that I can change with this mod - if it's causing any issues e.g. damaging builds made of logs, then please tell me what happened and we can work out what settings to change to minimise the risk of that happening again

### Syncmatica
This is a mod which allows Litematica users to share their schematics with other players - e.g. to work on the same build together! Litematica is a client-side mod that lets you save schematics, or blueprints, of builds to make it easier to copy them - between locations, between worlds... It provides a list of materials needed to build a schematic, a see-through copy of the build in the place you want it to be, and shows where the blocks in the world don't match the ones from the schematic (whether they're missing, in the wrong state, or a completely different block) 

### Proximity voice chat
Please note that while a Forge version of this mod also exists, the server is running Fabric and the two versions are not compatible with each other. If you want to use this mod, you need to be running Fabric! The newer mod versions are cross-compatible between Fabric and Forge, so that will be part of our 1.18 update.

This is the same mod used on Hermitcraft and other SMP servers. Assuming you have things set up correctly, it will allow you to vc with other players who are nearby in the game! There are similar controls to on a Discord vc - push-to-talk or voice activation for your mic, the option to mute or deafen, and to adjust the volume of others individually

## Server-side mods
We're currently running the following Fabric mods on the server:
- [Appleskin][appleskin] 2.1.0
- [Architectury][architectury] 2.4.25
- [Carpet][carpet] 1.4.45+v210811
- [Cloth Config][cloth] 5.0.38
- [Environmental Creepers][creepers] 1.6.0
- [Fabric API][api] 0.38.0
- [FabricHomes][homes] 2.0.0 *note I've modified this mod to add the lastdeath command*
- [FabricTPA][tpa] 3.0.1
- [FabricWarps][warps] 2.0.0
- [FallingTree][tree] 2.13.0
- [Lithium][lithium] 0.7.3
- [Roughly Enough Items][rei] 6.0.268
- [Simple Voice Chat][voice] 1.1.4

This should still be completely compatible with a vanilla client, but if you want to run any of these same mods it's likely worth running the same version number

# Existing channel list
- GENERAL
  - welcome-guide
  - general
  - discord-rules
  - minecraft-rules
  - changes-from-vanilla
  - announcements
  - role-self-assign
  - resource-requests-offers
- COMMUNITY PROJECTS
  - general-projects-talk
  - community-hub
  - themed-island-train
  - roads
- ADMIN STUFF
  - host-suggestions
  - rules-discussion
  - money-stuff
  - location-claims
  - in-game-usernames
 
# Upcoming channel list
- GENERAL
  - welcome-guide (including roles)
  - announcements
  - gen-chat
  - in-game-usernames
  - update-planning (threads for various things)
- COLLABS
  - resource-trading
  - community-projects (use threads)
- ARCHIVED
  - all old channels
  

<!-- Links collection! -->
[kofi]: https://ko-fi.com/oxidizedfeatherpen "OFP hosting funds Ko-Fi"
[mushroom]: https://discord.com/channels/716678742335815752/724591101972971631/793069593308037141 "community mushroom island map on Discord"
[kofi-pin]: https://discordapp.com/channels/716678742335815752/716678742847651883/722104332551454761
[ver]: https://help.minecraft.net/hc/en-us/articles/360034754852-Change-Game-Version-for-Minecraft-Java-Edition
[buildsheet]: https://docs.google.com/spreadsheets/d/1OX2kyzMaYhIuiPzp3zH9FDsyAb8wQJKCrBdDMf_Qmb8/edit?usp=sharing
[chunkbase]: https://www.chunkbase.com/apps/seed-map
[wiki]: https://minecraft.fandom.com/wiki/Minecraft_Wiki
[appleskin]: https://www.curseforge.com/minecraft/mc-mods/appleskin
[architectury]: https://www.curseforge.com/minecraft/mc-mods/architectury-fabric
[carpet]: https://www.curseforge.com/minecraft/mc-mods/carpet
[cloth]: https://www.curseforge.com/minecraft/mc-mods/cloth-config
[creepers]: https://www.curseforge.com/minecraft/mc-mods/environmental-creepers
[api]: https://www.curseforge.com/minecraft/mc-mods/fabric-api
[homes]: https://www.curseforge.com/minecraft/mc-mods/fabrichomes
[tpa]: https://www.curseforge.com/minecraft/mc-mods/fabrictpa
[warps]: https://www.curseforge.com/minecraft/mc-mods/fabricwarps
[tree]: https://www.curseforge.com/minecraft/mc-mods/falling-tree
[lithium]: https://www.curseforge.com/minecraft/mc-mods/lithium
[rei]: https://www.curseforge.com/minecraft/mc-mods/roughly-enough-items
[voice]: https://www.curseforge.com/minecraft/mc-mods/simple-voice-chat