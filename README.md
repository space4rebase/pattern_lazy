# Lazy pattern

## Functions description



|Function|Role  |
|--|--|
| force | _Exported function._ Takes a lazy value as an argument. Implements its **force** function |
| lazy  | _Exported function._ Uses a LazyValue constructor to create a new instance with a given factory function. |
| LazyValue | A constructor. Creates an LazyValue instance with its own fields |


LazyValue instance fields:
-   **state**:
    
    -   isForced (to be toggled to true by **this.force**)
        
    -   value (created by **this.force**)
        
-   **force** - function to change **this.state** (only one time).
    
-   **factory** - function to be implemented. |

## Conception

To create an object with a factory function.

``const lazyInstance = lazy(arg => `My ${arg}`);``

Then by means of **force** function obtain a state of this object:

`force(lazyInstance, 'data');`

Now the instance has its own state with a value field:

`console.log(lazyInstance.state.value); // My data`

Subsequent force will not change the state:

`force(lazyInstance, 'data2'); console.log(lazyInstance.state.value); // My data`