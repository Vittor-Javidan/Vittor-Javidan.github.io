# This is a proto patern, you can call it "ComponentAPI pattern".

The problem i'm trying to solve here is to have a way to set states outside the component.
Outside the component, you can understand as, outside in any situation.

A pratical example is the window component, where i need to open and close by just clicking the sidebar items.

Sibar component is not a parent component, it's a simbling. but could be any component anywhere.

You can try to solve this by creating states on parent components and passing as props, but you you try this,
on my specific situation, you gonna end with states in places that makes no sense in order to abstract.
And if you try to solve by creating context, you gonna notice that makes no sense, since you start to create
provider pattern.

## How this pattern works?

Well, it's simple, is like an API, you get, post something or register a component.

The intention is to enable a group of same components to change state indirecly, by using the component specific API inside another component. That can be a state change of many components, or single components.

Notice, that the API gives no access to the states itself, since that's should be private to the component and it's children.

The patter should save only references of setStates from "useState" hooks. Nothing more.

## Implementation on this project

In this project, i prefer to just create everything on each API static, since you just manipulating a group of function references, and theres is no need to create API instances.


It's easier to understand by seeing the pattern, than just reading what i'm saying here :).