# React Native Basic Components
React Native Basic Components

### Installation

```bash
$ npm i mesan-react-native-components --save
```

### FilterView
Shows a filter view

```javascript
import React from 'react';
import {View} from 'react-native';

import {FilterView} from 'mesan-react-native-components'

export default function Example(props) {
    const [selectedFilters, setSelectedFilters] = useState([]);
    const [filterVisible, setFilterVisible] = useState(false);
    
    //returns the filters and an array of selected
    const onDone = ({filters, selected}) => setSelectedFilters(selected);
    
    const order_options = [{name: "Name"}, {name: "Age"}, {name: "Price"}];
    const category_options = [{name: "Music"}, {name: "Sport"}, {name: "Theatre"}];
    const filters = [
        {title: "Order By", options: order_options}, 
        {title: "Category", options: category_options}
    ];
    
    return (
        <View>
            <FilterView
                modal={true}
                filters={filters}
                visible={filterVisible}
                onDone={onDone}
                onCancel={() => setFilterVisible(false)}/>
            <Text>{selectedFilters.toString()}</Text>
        </View>
    );

};
```

| prop | value | required/optional | description |
| ---- | ----- | ----------------- | ----------- |
| modal | boolean | optional | indicates if the filter view will be displayed in a modal or not. if true, view is hidden until triggered |
| filters | array | required | an array of objects of filters to display |
| onDone | function | required | the function called when the 'Done' button is tapped |
| onCancel | function | required | the function called when the 'Cancel' button is tapped |
| visible | object | optional | used to trigger the visibility of the Component, used only if 'modal' is true |


### Panel
Shows a panel

```javascript
import React from 'react';

import {Panel} from 'mesan-react-native-components'

export default function Example(props) {
    return (
        <View>
            <Panel title={'Panel Header Title'}
                   data={[{}, {}, ...]} 
                   itemWidth={200}
                   margin={12}
                   containerStyle={{paddingTop: 12}}
                   titleStyle={{fontFamily: font,color: "#0E0E27", marginBottom: 4}}
                   renderItem={({item}) => <EventItem item={item} isFeatured={true}/>}/>
        </View>
    );

};
```

| prop | value | required/optional | description |
| ---- | ----- | ----------------- | ----------- |
| title | string | optional | The panel title - Show at the top of panel |
| data | object | required | the data to show |
| itemWidth | number | required | the width of the child components |
| margin | number | required | the margin between the child components |
| containerStyle | function | optional | the style for the container |
| titleStyle | function | optional | the style for the title |
| renderItem | function | required | the component to render for each item |


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
