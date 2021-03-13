# MyCounter Github Action

This action is developed to Hit or Get Counter value on MyCounter.

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
```yaml
uses: actions/hello-world-javascript-action@main
with:
  who-to-greet: 'Mona the Octocat'
```
