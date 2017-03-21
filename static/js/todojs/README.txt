Flux is used for unidirectional flow of data.
"When a user interacts with a React view, the view propagates an action through a central dispatcher, to the various
stores that hold the application's data and business logic, which updates all of the views that are affected."
Image reference : https://facebook.github.io/flux/img/flux-simple-f8-diagram-1300w.png

A) The dispatcher is the central hub that manages all data flow in a Flux application. it is a simple mechanism for
distributing the actions to the stores. When an action creator provides the dispatcher with a new action, all stores
in the application receive the action via the callbacks in the registry.

B) Stores contain the application state and logic. Their role is somewhat similar to a model in a traditional MVC, but
they manage the state of many objects. Within the store's registered callback, a switch statement based on the action's
type is used to interpret the action and to provide the proper hooks into the store's internal methods. This allows an
action to result in an update to the state of the store, via the dispatcher. After the stores are updated, they
broadcast an event declaring that their state has changed, so the views may query the new state and update themselves.

C) When it receives the event from the store, it first requests the new data it needs via the stores' public getter
methods. It then calls its own setState() or forceUpdate() methods, causing its render() method and the render() method
of all its descendants to run.
