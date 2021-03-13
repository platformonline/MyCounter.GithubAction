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
uses: platformonline/MyCounter.GithubAction@v1.0
with:
  action: 'Hit'
  namespace: 'NameSpace'
  key: 'Key'
  token: '${{ secrets.TOKEN }}'
```
