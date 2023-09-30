# Markdown Extension Examples

This page demonstrates some of the built-in markdown extensions provided by VitePress.

## Syntax Highlighting

VitePress provides Syntax Highlighting powered by [Shiki](https://github.com/shikijs/shiki), with additional features like line-highlighting:

**Input**

````
```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```
````

**Output**

```js{4}
export default {
  data () {
    return {
      msg: 'Highlighted!'
    }
  }
}
```

## Custom Containers

**Input**

```md
::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::
```

**Output**

::: info
This is an info box.
:::

::: tip
This is a tip.
:::

::: warning
This is a warning.
:::

::: danger
This is a dangerous warning.
:::

::: details
This is a details block.
:::

## PlantUML Diagram

```plantuml
start
:Let entSet be a set of Entitlements to revoke;
:Add all dependent entitlements to entSet;
:Delete all dependent entitlements from database;
:Delete pools of entitlements 
in entSet that are development pools;
:Update consumed quantity of entSet;
:Delete all entSet entitlements
 from database;
:stackPools = filter Entitlements from entSet that
have stacking_id attribute;
partition for-each-entSet {
:stackPool = find stack pool  
for entitlement;
:sSet = find all ents that have the 
stacking_id;
:Update stackPool based on sSet;
}
:virtEnts = filter Entitlements from entSet that 
have virt_limit and are for distributors;
partition for-each-virtEnts {
if (virt_limit == unlimited) then
-> YES;
:Set bonus pool quantity to -1;
else
-> NO;
:Add back reduced pool quantity;
endif
}
:mEnts = get all modifier 
entitlements of entSet entitlements;;
:Lazily regenerate entitlement certificates 
 for all mEnts;
:Compute compliance status for all 
Consumers that have an entitlement in entSet;
stop
```

## More

Check out the documentation for the [full list of markdown extensions](https://vitepress.dev/guide/markdown).
