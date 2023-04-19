# bank.js
## Introduction

*First clone the repo*

You will need to install a program called Node.js (also just called "node"). Node is a
JavaScript *runtime* - which means it reads JavaScript code, and execute it as a program.
This is very similar to, for example, `ruby` or `irb`, which can read and execute Ruby
code, either in files or entered directly into the REPL.

First let's install `nvm` - the Node Version Manager. If you've used Ruby with `rvm`
before, it's a similar tool: `nvm` allows us to install and manage specific Node versions.
You can check the latest Node release on the [releases
page](https://nodejs.org/en/about/releases/). Running `nvm install node` and `nvm use
node` will automatically install and use the latest stable version.

NVM is distributed using github - you can find installation instructions for the latest
version [here](https://github.com/nvm-sh/nvm#installing-and-updating). You'll need to run
a command that looks like this: 

```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

Once that step is complete, you'll need to reload your ~/.zshrc file:

```
source ~/.zshrc
```

Now, you can install Node using nvm:

```
$ nvm install node
$ nvm use node
```
## How to run the program
### Type these commands first : 
```
$ node
$ const bank = require('./bank)
$ bank1 = new bank()
```
### Then you need to call the transaction method and parse the date aswell as the amount and with
a + or - at the start to state wether your are depositing or withdrawing
To give a example it would be like : 
```
$ bank1.transaction('11/23/2005',+1000)
```
### You can also call this multiple times : 
```
$ bank1.transaction('11/23/2005',+1000)
$ bank1.transaction('11/22/2003',-50)
```
### Then you call the balance method to show your transaction history :
```
$ bank1.balance()

```
### To give a whole example it would be like 
```
$ node
$ const bank = require("./bank")
$ bank1 = new bank()
$ bank1.transaction('11/23/2005',+1000)
$ bank1.transaction('11/23/2005',-50)
$ bank1.balance()
```

