import {ITreeNode} from '../models/tree-node.interface';
import {Injectable} from '@angular/core';

@Injectable()
export class NodeUtils {
    public findNodesDeep(nodes: ITreeNode[], keys: string[]): ITreeNode[] {
        let foundNodes: ITreeNode[] = [];
        for (const node of nodes) {
            if (keys.includes(node.key)) {
                foundNodes = [...foundNodes, node];
            }
            if (node.children) {
                const foundNodesInChildren = this.findNodesDeep(node.children, keys);
                foundNodes = [...foundNodes, ...foundNodesInChildren];
            }
        }
        return foundNodes;
    }

    public nodeAccumulator(nodes: ITreeNode[], node: ITreeNode): ITreeNode[] {
        if (nodes.find(candidate => candidate.key === node.key)) {
            return nodes.filter(candidate => candidate.key !== node.key);
        } else {
            return [...nodes, node];
        }
    }
}
