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