import React from 'react';
import { Stack, IStackTokens, StackItem, DetailsList, DetailsListLayoutMode, SelectionMode, IRenderFunction, IDetailsColumnProps } from '@fluentui/react';
import Shoe from '../Assets/shoe.png'
import Car from '../Assets/car.png'
import Dog from '../Assets/dog.png'
import House from '../Assets/house.png'

const stackTokens: IStackTokens = { childrenGap: 15 };

export const GameList: React.FunctionComponent = () => {
    const _onRenderHeader: IRenderFunction<IDetailsColumnProps> = (props) => {
        //if (props?.column.name === 'hat') return <span><img width={20} src={Shoe} alt="hat" /></span>
        if (props?.column.name === 'car') return <span><img width={20} src={Car} alt="car" /></span>
        if (props?.column.name === 'dog') return <span><img width={20} src={Dog} alt="dog" /></span>
        if (props?.column.name === 'shoe') return <span><img width={20} src={Shoe} alt="shoe" /></span>
        //if (props?.column.name === 'iron') return <span><img width={20} src={Shoe} alt="iron" /></span>
        //if (props?.column.name === 'ship') return <span><img width={20} src={Shoe} alt="ship" /></span>
        if (props?.column.name === 'houses') return <span><img width={20} src={House} alt="houses" /></span>

        return <span>{props?.column.name}</span>
    }


    const _columns = [
        { key: 'ag', name: 'AG', fieldName: 'ag', minWidth: 50, isResizable: true },
        { key: 'houses', name: 'houses', fieldName: 'houses', onRenderHeader: _onRenderHeader, minWidth: 50, isResizable: true },
        { key: 'available', name: '', fieldName: 'available', minWidth: 50, isResizable: true },
        { key: 'hat', name: 'hat', fieldName: 'hat', onRenderHeader: _onRenderHeader, minWidth: 50, isResizable: true },
        { key: 'car', name: 'car', fieldName: 'car', onRenderHeader: _onRenderHeader, minWidth: 50, isResizable: true },
        { key: 'dog', name: 'dog', fieldName: 'dog', onRenderHeader: _onRenderHeader, minWidth: 50, isResizable: true },
        { key: 'shoe', name: 'shoe', fieldName: 'shoe', onRenderHeader: _onRenderHeader, minWidth: 50, isResizable: true },
        { key: 'iron', name: 'iron', fieldName: 'iron', onRenderHeader: _onRenderHeader, minWidth: 50, isResizable: true },
        { key: 'ship', name: 'ship', fieldName: 'ship', onRenderHeader: _onRenderHeader, minWidth: 50, isResizable: true },
    ];

    const randomNumberInRange = (min: number, max: number) => {
        return Math.floor(Math.random()
            * (max - min + 1)) + min;
    };

    // Populate with items for demos.
    const _allItems = [];
    for (let i = 1; i < 23; i++) {
        _allItems.push({
            key: i,
            ag: i,
            houses: randomNumberInRange(0, 5),
            available: randomNumberInRange(0, 9),
            hat: randomNumberInRange(0, 9),
            car: randomNumberInRange(0, 9),
            dog: randomNumberInRange(0, 9),
            shoe: randomNumberInRange(0, 9),
            iron: randomNumberInRange(0, 9),
            ship: randomNumberInRange(0, 9)
        });
    }

    return (
        <Stack verticalFill tokens={stackTokens}>
            <StackItem>
                <DetailsList
                    items={_allItems}
                    columns={_columns}
                    setKey="set"
                    selectionMode={SelectionMode.none}
                    layoutMode={DetailsListLayoutMode.justified}
                    checkButtonAriaLabel="select row"
                />
            </StackItem>
        </Stack>
    );
};
