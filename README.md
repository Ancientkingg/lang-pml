# Public Macro Library
This repository hosts the public macro library plugin made for (mc-build)[https://mcbuild.dev]

## pre-requisites
mc-build

## How to use
```
# To see which macros are available type in
mcb pml catalog
```
```
# To add a macro to your source directory type in
mcb pml add <macro_name>
```
Note for macro names that are too long to be displayed in the catalog, a part of the name can be typed in and it will look for the closest match.
## How to publish a macro
Add an author and description to your macro as such:
```
###
Author: Ancientkingg
Description: This is an example description where you must not use linebreaks!
###

macro test{
    say 123
}
```
The author and description should always be on the second and third line respectively.
Next. Make a pull request which contains your new macro in the `/macros` folder
