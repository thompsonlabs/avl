import { describe, it } from 'mocha';
import { assert }       from 'chai';

import Tree from '../src/index';

describe('Get Floor Entry', () => {

    it('should return the entry corresponding to the specified key or the entry for the greatest key less than the specified key.', () => {

        const tree = new Tree();
        tree.insert(1, "hello");
        tree.insert(3, "howdi");
        tree.insert(5, "bonjour");
        assert.equal(tree.floor(2).data,"hello");
        assert.equal(tree.floor(4).data,"howdi");
        assert.equal(tree.floor(6).data,"bonjour");

    });

    it('should return the entry corresponding to the specified key, where there is an EXACT match.', () => {

        const tree = new Tree();
        tree.insert(1, "hello");
        tree.insert(5, "bonjour");
        assert.equal(tree.floor(1).data,"hello");
        assert.equal(tree.floor(5).data,"bonjour");

    });

    it('should return null, where the tree is empty.', () => {

        const tree = new Tree();
        assert.equal(tree.floor(1),null);
         
    });



});