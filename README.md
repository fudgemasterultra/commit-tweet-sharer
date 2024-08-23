# commit-tweet-sharer

> A GitHub App built with [Probot](https://github.com/probot/probot) that An app to help share insightfull commits

## Setup

```sh
# Install dependencies
npm install

# Run the bot
npm start
```

## Docker

```sh
# 1. Build container
docker build -t commit-tweet-sharer .

# 2. Start container
docker run -e APP_ID=<app-id> -e PRIVATE_KEY=<pem-value> commit-tweet-sharer
```

## Contributing

If you have suggestions for how commit-tweet-sharer could be improved, or want to report a bug, open an issue! We'd love all and any contributions.

For more, check out the [Contributing Guide](CONTRIBUTING.md).

## License

[ISC](LICENSE) © 2024 J&M
