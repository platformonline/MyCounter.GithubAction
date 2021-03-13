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
- name: MyCounter Github Action
  uses: platformonline/MyCounter.GithubAction@v1.0
  id: counter
  with:
    action: 'Hit'
    namespace: 'NameSpace'
    key: 'Key'
    token: '${{ secrets.TOKEN }}'
- name: Get Value
  run: echo "Value = ${{ steps.counter.outputs.value }}"
```
