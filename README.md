## Install

```javascript
npm install small-style-loader --save
```

## Usage
Documentation: Using loaders[http://webpack.github.io/docs/using-loaders.html]

Smaller than style-loader

```javascript
    //config
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'small-style-loader'
        },{
            test: /\.less$/,
            loader: 'small-style-loader!less-loader'
        }]
    }

    //options
    //insertAt options default is bottom
    module: {
        loaders: [{
            test: /\.css$/,
            loader: 'small-style-loader?{"insertAt":"top"}'
        },{
            test: /\.less$/,
            loader: 'small-style-loader?{"insertAt":"top"}!less-loader'
        }]
    }
```

## LICENSE
MIT [http://www.opensource.org/licenses/mit-license.php]