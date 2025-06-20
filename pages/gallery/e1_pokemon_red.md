---
layout: base
title: "Pokemon Red Example"
eleventyNavigation:
    key: PokemonRed
    title: Pokemon Red Example
    parent: Examples
tags: example
---

# Web-Based Game Emulation

Games: *Pokémon Red Version (USA, Europe) for the Nintendo Game Boy* and *The Legend of Zelda: Link’s Awakening (USA, Europe) for the Nintendo Game Boy*

    Video game glitches are a staple fascination of fan communities. This paper will examine
a few notable glitches in two Nintendo Game Boy games: Pokémon Red Version and The Legend
of Zelda: Link’s Awakening. GISST references are provided to demonstrate the glitches and allow
for interaction. The glitches presented here are mostly safe insofar as they will not tend to result in game crashes. Also, despite the sometimes alarming appearance of glitches, there is no risk of damage beyond save file deletion; that is to say, GISST save states are not affected by glitch behaviour.

## Pokémon Red

    Pokémon Red Version (1996) is home to a huge array of glitches. Standard Pokémon
gameplay involves exploring a fantasy world inhabited by cartoon creatures called Pokémon,
which can be captured, collected, and trained for battle. One of the most significant glitches in
video game history is that of “MissingNo.” – a glitch which occurs when the game tries to load
in an encounter with a Pokémon but uses usually inaccessible data, resulting in a broken image
being displayed, usually with the “name” MissingNo. or some garbage text. [1] In the specific
instance provided, there are a few things of note:

    1. This moment begins just as the encounter (or “battle”) with MissingNo. begins.
Immediately prior to this, the player closes a menu with the B button on the Game Boy
controller. [2] This menu appeared as a result of other glitches performed by the player
which enable MissingNo.’s appearance.

    2. The battle takes a few moments to load in. Though this is not a significant amount of
time, it is longer than usual because the game is trying to load in a very large image to
portray MissingNo. – this “image” data is actually the data for other code in the game,
accessed by mistake due to there being no image data associated with the Pokémon being
encountered. [3]

    3. Selecting “ITEM” from the battle menu, there are now 9 Master Ball items in the player’s
inventory. This is impossible in normal gameplay. In fact, there are 128 Master Balls in
the inventory, due to the sixth item in the player’s item list being multiplied by 128 when
MissingNo. is loaded in; however, the game cannot properly display such a high number.

    If MissingNo. is captured by the player by using a Master Ball in battle against it, some
additional glitches can be observed, as shown in this gameplay demonstration. [4] This
demonstration begins with the first step of the glitch, which is to enter the sight range of an
NPC, but open the menu and fly out of the area thanks to one of the player’s Pokémon. The
player then flies to a city before entering a Pokémon battle with another NPC and winning.
Flying again, the player travels to a town adjacent to the area where they encountered the
first NPC. When they return to that area, the battle with MissingNo. begins.
    
    From there, the player assigns MissingNo. as the first “Pokémon” to be sent out in a
battle. They immediately engage another NPC in battle, where some glitched graphical effects
can be observed on MissingNo., the player character, the opponent NPC, and the opponent’s
Pokémon. The demonstration then ends.

    A phenomenon related to MissingNo., called “‘M,” can be encountered in a related way,
as shown in this demonstration. [5] This process begins with having the Old Man NPC show the
player how to catch Pokémon, and ends with the player encountering ‘M on the shores of
Cinnabar City. ‘M, once captured, can be seen to be a Bird type Pokémon, [6] a type which is not
available in typical Pokémon Red gameplay.

    As a final demonstration of glitches in Pokémon Red, let us turn to Glitch City. There is a
Safari Zone in the game which summons the player back after having taken 500 steps ingame.
By confusing the game’s routines with a reset, the Safari Zone can be exited with the step
counter still going. After it completes, the player will be warped back to the Safari Zone’s main
gate, and upon exiting they will be in a Glitch City [7] – an error map consisting of incorrectly
generated tilesets and map data, based on where the player went to prior to being warped back.
Here is a demonstration of the glitch, including the system reset and 500 steps.

## Link's Awakening

    Moving on to Link’s Awakening, there is nothing quite as striking as the MissingNo. [8]
glitch, but the glitches are much more pervasive. If the player presses the SELECT button just as
they move to the edge of the screen in order to scroll the screen, they may remain in the same
screen position they were in previously once the new screen appears. This is called “warping,”
and can be used to bypass various obstacles, as shown in this demonstration. [9] The only danger is that the player may become stuck in walls or disrupt the regular flow of the game.

    More exciting is the Fisherman glitch, which can be done by precisely performing a warp
on the screen with the fisherman, resulting in him being pulled down out of his regular location. [10]

    From there, the player can explore a world similar to the Glitch City, consisting of wrongly
generated map data and tilesets.


    Also related is the doghouse glitch, which occurs when entering the doghouse found in
the starting village from the wrong direction by pressing into the tile from the other side of the
doghouse. This glitch world is more consistent due to drawing from an in-game level layout, and
the warp glitch can even be used to traverse more difficult areas. [11] While there is not much of
note in any of these worlds, the power of the warp glitch and the potential risks of crashing led
Nintendo to reissue Link’s Awakening as Link’s Awakening DX, which removed these bugs.

    These glitches demonstrate the susceptibility of code to complex unexpected behaviours,
and the GISST format allows for easy viewing and exploration of these glitch creatures and
worlds. Despite simply being erroneously displayed code and graphics, the video game context
of these errors lends them a certain alluring quality, especially with MissingNo. slotting easily
into Pokémon’s monster-collecting gameplay and the glitch dimension of Link’s Awakening
suiting The Legend of Zelda’s exploration-focused adventures. While deep technical explanations
or analyses of these glitches’ cultural impact are beyond the scope of this essay, the moments
discussed provide a way for users to explore these strange, erroneous worlds conveniently.

## GISST Review

    For my project, I spent a lot of time playing with controller settings, in order to make
gameplay convenient. RetroArch has default controller bindings, but I preferred to use Steam’s
controller support since my settings would linger between instances instead of being lost as
RetroArch settings are on GISST. In fact, RetroArch’s controller support initially caused
problems as its default A and B are assigned to the opposite buttons I assigned them to on Steam,
so prior to me realising that RetroArch has its own bindings, all of my button presses were doing
both what I wanted, and the exact opposite of what I wanted. It would be nice to be able to save
and import/export RetroArch settings with GISST if it is not already possible (I at least couldn’t
find how to download my own settings for keybinds and speedup rate). Also, learning the F1
menu was useful in my case since I needed to reset my game console without closing the
instance, and only that menu lets you do that.

    The citation/replay feature is very cool, though it took me some time to understand
exactly what the setup was. I thankfully didn’t lose any time to closing a session with unsaved
work, since I initially thought that all my save states would be accessible to me even after I
closed an instance. Once I understood it I had a lot of fun creating and uploading different
moments and replays that might be interesting, and I think there are a few that additionally didn’t make it into the paper. If there is a way to make it so save states can be loaded with a simple button press (perhaps facilitated by RetroArch’s hotkeys?), that would be convenient – I also tried a save corruption glitch which required repeated resets from a save state.

    Another thought is Tool-Assisted Speedrun tool integration. MissingNo. glitches involve
the player’s chosen name, which can only be chosen at the start of the game – the actual glitch
happens ~12 hours in in my examples. Being able to plug in replay data that can be modified would be highly convenient, and would be helpful for scholars not wanting to replay entire
games again.

    Overall, I was a little suspicious of GISST since it seemed too inconvenient to try and
replay especially long games in this format, but once I got used to it (and integrated a proper
controller), it went swimmingly.

## Bibliography / Resources Consulted

Glitch City Wiki. glitchcity.wiki. https://glitchcity.wiki/wiki/Main_Page

Pokémon Red Version, North American/European release. Nintendo, 1998. Played via emulation through RetroArch 1.17.0 Gambatte (v0.50 76c8751).

Retro Game Mech. “MissingNo.’s Glitchy Appearance Explained.” Video. YouTube, 2020. [3]

The Legend of Zelda: Link’s Awakening, North American/Europe release. Nintendo, 1993. Played via emulation through RetroArch 1.17.0 Gambatte (v0.50 76c8751).


[1]: https://gisst.pomona.edu/play/8bbc851c-9b8b-4cf2-a730-fe1b85eedc9f?state=76e9eb08-b53e-485e-b264-738a01ac833e (“MissingNo.”encounter, Pokémon Red Version, North American/European release. Nintendo, 1998.)
[2]: https://gisst.pomona.edu/play/8bbc851c-9b8b-4cf2-a730-fe1b85eedc9f?state=0070c39d-0062-4b17-9509-a5da1bbe994e (Sudden, unprompted menu appearance, Pokémon Red Version, North American/European release. Nintendo, 1998.)
[3]: https://www.youtube.com/watch?v=ZI50XUeN6QE (13:26-18:12, Retro Game Mech. “MissingNo.’s Glitchy Appearance Explained.” Video. YouTube, 2020.)
[4]: https://gisst.pomona.edu/play/8bbc851c-9b8b-4cf2-a730-fe1b85eedc9f?replay=ce52785f-4feb-4cbd-be51-f05dd6268180 (Using MissingNo. in battle, Pokémon Red Version, North American/European release. Nintendo, 1998.)
[5]: https://gisst.pomona.edu/play/8bbc851c-9b8b-4cf2-a730-fe1b85eedc9f?replay=2e4bb2b8-a063-4706-b102-975445ffb36f (Encountering ‘M with the Old Man glitch, Pokémon Red Version, Nintendo.)
[6]: https://gisst.pomona.edu/play/8bbc851c-9b8b-4cf2-a730-fe1b85eedc9f?state=bbe6dda9-9a16-4339-82af-b585b78a5bc4 (Viewing ‘M’s status screen, Pokémon Red Version, Nintendo.)
[7]: https://gisst.pomona.edu/play/8bbc851c-9b8b-4cf2-a730-fe1b85eedc9f?state=1fd4935f-6859-4bb0-bea1-46a43f22e08f (Route 6 Glitch City, Pokémon Red Version, Nintendo.)
[8]: https://gisst.pomona.edu/play/8bbc851c-9b8b-4cf2-a730-fe1b85eedc9f?replay=fda8d8df-117c-46e2-9942-783173cdc52a (The road to Glitch City, Pokémon Red Version, Nintendo.)
[9]: https://gisst.pomona.edu/play/bb1d0080-0f3c-45ca-8199-50debb224230?replay=90a7e8c9-e3c4-4229-bddc-41b291b6a4a2 (Warp glitch through a gate, The Legend of Zelda: Link’s Awakening, North American/Europe release. Nintendo, 1993.)
[10]: https://gisst.pomona.edu/play/bb1d0080-0f3c-45ca-8199-50debb224230?replay=dd53ea32-7c51-434e-965c-c3f05f046159 (Fisherman glitch, The Legend of Zelda: Link’s Awakening, North American/Europe release. Nintendo, 1993.)
[11]: https://gisst.pomona.edu/play/bb1d0080-0f3c-45ca-8199-50debb224230?replay=be12b3e0-8ff5-4b36-a5a4-e01c76b85dab (Doghouse glitch, The Legend of Zelda: Link’s Awakening, Nintendo.)