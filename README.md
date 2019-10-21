## tom.fm

> A hypermedia broadcasting service transmitting thoughts on technology, productivity, culture, & related topics.

## Scripts

| script        | description                  |
| ------------- | ---------------------------- |
| `yarn build`  | Build site for production    |
| `yarn deploy` | Deploy site                  |
| `yarn dev`    | Run site in development mode |
| `yarn start`  | Serve production build       |

## Set Up

#### Development

Create a `.env.development` file:

```
GATSBY_BUTTONDOWN_API_KEY=bc7e5a10-c92e-2c9e-a7aa-c979940f561c
```

#### Production

Run following commands to configure [`now`](https://now.sh):

```
> now secrets add gatsby-buttondown-api-key bc7e5a10-c92e-2c9e-a7aa-c979940f561c
> now dns add tom.fm '@' TXT 'v=spf1 include:mailgun.org ~all'
> now dns add tom.fm 'krs._domainkey' TXT 'k=rsa; p=MIGfMA0GCSqGSI[...]AQAB'
> now dns add tom.fm 'email' CNAME 'mailgun.org'
> now dns add tom.fm '@' MX 'mxa.mailgun.org' 10
> now dns add tom.fm '@' MX 'mxb.mailgun.org' 10
```

## License

[MIT](LICENSE) © [Tom Meagher](https://tom.fm)
