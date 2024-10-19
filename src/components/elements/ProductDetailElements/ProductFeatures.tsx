import React from 'react'
import { Table, TableBody, TableCell, TableColumn, TableHeader, TableRow } from '@nextui-org/react'
import { ProductFeaturesProps } from '@/types';

export const ProductFeatures: React.FC<ProductFeaturesProps> = ({ data }) => {

    return (
        <Table aria-label="Example static collection table" removeWrapper hideHeader isStriped className="bg-transparent">
            <TableHeader>
                <TableColumn>NAME</TableColumn>
                <TableColumn>ROLE</TableColumn>
            </TableHeader>
            <TableBody>
                {data.map((item, index) => (
                    <TableRow key={index} className={index % 2 === 0 ? 'bg-gray-100' : 'bg-white'}>
                        <TableCell><strong>{item.name}</strong></TableCell>
                        <TableCell>{item.role}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
     
    );
};

