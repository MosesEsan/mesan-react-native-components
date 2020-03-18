# React Native Basic Components
React Native Basic Components

### Installation

```bash
$ npm i mesan-react-native-components --save
```

### Filter
Shows a filter component

```javascript
import React from 'react';
import {View} from 'react-native';

import {Filter} from 'mesan-react-native-components'

export default function Example(props) {
    const filters = [{name: "Music"}, {name: "Sport"}, {name: "Theatre"}];
    const [currentFilter, setCurrentFilter] = useState(null);
    
    const onFilter= (filter) => setCurrentFilter(filter);
    
    return (
        <View>
            <Filter filters={filters} onFilter={onFilter} currentFilter={currentFilter}/>
            <Text>{currentFilter}</Text>
        </View>
    );

};
```

| prop | value | required/optional | description |
| ---- | ----- | ----------------- | ----------- |
| filters | array | required | an array of objects of filters to display |
| onFilter | function | required | the function called when the item is tapped |
| currentFilter | object | required | the currently selected filter |


### Loading
Shows a large view with a centered large loading indicator.

### Footer
Shows a small view with a centered small loading indicator.

```javascript
import React from 'react';

import {Loading, Footer} from 'mesan-react-native-components'

export default function Example(props) {
    const [data, setData] = useState([]);
    const [isFetching, setIsFetching] = useState(true);
    
    //2 - MAIN CODE BEGINS HERE
    useEffect(() => {
        setTimeout(() =>  setIsFetching(false), 3000);
    }, []);

    if (isFetching) return <Loading/>;
    
    return(
        <FlatList
            data={data}
            renderItem={renderItem}
            ListFooterComponent={<Footer/>}/>
    )
};
```

### Error
Shows a view with a error message and a retry button

```javascript
import React from 'react';
import {View} from 'react-native';

import {Error} from 'mesan-react-native-components'

export default function Example(props) {
    
    const onRetry= () => console.log("Retrying....");
    
    return (
        <View>
            <Error error={error} onRetry={onRetry}/>
        </View>
    );

};
```

| prop | value | required/optional | description |
| ---- | ----- | ----------------- | ----------- |
| error | object | required | an object with the key 'message' |
| onRetry | function | optional | the function called when the retry button is tapped |
