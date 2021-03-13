# MyCounter Github Action

This action prints "Hello World" or "Hello" + the name of a person to greet to the log.

## Inputs

### `action`

Type for the action to be performed. Default `"Hit"`.

### `namespace`

**Required** The name of the Namespace.

### `key`

**Required** The name of the Key.

### `token`

Token to be used for security. Default `null`

## Outputs

### `value`

Counter Value

## Example usage

uses: actions/hello-world-javascript-action@v1.1
with:
  who-to-greet: 'Mona the Octocat'