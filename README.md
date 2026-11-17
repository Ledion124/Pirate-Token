# Fortnite Pirate Token Simulator

A small website that simulates how hard it is to find the Pirate Token in Fortnite.

I built this project completely on my own, just for fun. I wanted to see what the odds actually look like and test my own luck without opening thousands of chests in the game.

## What it does

The token has a **1 in 137,500** chance to drop from a chest. The page has two simulations:

### Test your luck

Opens chests one after another until the token drops, then shows how many chests it took.
Every click gives a different result. Sometimes you're lucky, sometimes it takes hundreds of thousands of chests.

### Simulate players

Every player opens **2000 chests**. The simulation keeps adding players until one of them finds the token, then shows how many players it took.

## The odds

|                                       | Chance       |
| ------------------------------------- | ------------ |
| Token per chest                       | 1 in 137,500 |
| One player gets it within 2000 chests | about 1.4 %  |
| Players needed on average             | about 69     |

So out of about 69 players who each open 2000 chests, usually only one gets the token.

## Built with

- HTML
- CSS
- JavaScript

## Files

```
index.html   → page structure and styling
fortnite.js  → the simulations
```

---
