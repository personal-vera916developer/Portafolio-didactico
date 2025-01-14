import { test } from 'node:test'
import assert from 'node:assert'
test('should return 2 when adding 1 + 1', () => {
  const result = 1 + 1
  assert.strictEqual(result, 2, '1 + 1 should equal 2')
})
test('should not equal 3 when adding 1 + 1', () => {
  const result = 1 + 1
  assert.notStrictEqual(result, 3, '1 + 1 should not equal 3')
})
