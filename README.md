# Integrating CodeIgniter 3.1.9 with Laravel-Mix 2.1.14
### Author Eko Junaidi Salam <eko_junaidisalam@live.com>
### MIT License


## How to use
1. Clone this repo and `cd` into it.
2. Install npm modules.
```
npm install
```
3. Setup symlink for `cross-env` binary to your path. Adjust your folder location. (Linux only)
```
sudo ln -s /home/users/tmp/ci3-with-laravel-mix/node_modules/cross-env/dist/bin/cross-env.js /usr/local/bin/cross-env
```
4. Or, you can install `cross-env` binary globally in your npm environment and setup your NPM global binary location into your `Environment System Path`. (For Windows)
```
npm install -g cross-env

# Check global binary in npm
npm -g list --depth=0

# Please ensure there is cross-env in the list.
```
5. If everything OK with no Error, you can run webpack now.
```
# For development purpose
npm run watch-poll

# For production
npm run prod
```
6. For full npm command please read [package.json](https://github.com/ekojs/ci3-with-laravel-mix/blob/master/package.json#L5)
6. Open your app in web browser to check it out.

## Customize the file
1. Customize this [webpack.mix.js](https://github.com/ekojs/ci3-with-laravel-mix/blob/master/webpack.mix.js) to match your need.
2. Customize this [app.scss](https://github.com/ekojs/ci3-with-laravel-mix/blob/master/src/css/app.scss).
3. Customize this [app.js](https://github.com/ekojs/ci3-with-laravel-mix/blob/master/src/js/app.js).

#### Note:
Please feel free to comment, add useful info to this repo or send your [issue](https://github.com/ekojs/ci3-with-laravel-mix/issues/new).