//SECTION Basic structures
type arr<T> = Array<T>; //NOTE - Array with a dinamic value, can be duplicated.
type Tuple<T, P> = [T, P]; //NOTE - Fixed list.
type set<T> = Set<T>; //NOTE - Array whit a dinamic value but cant be ducplicates.
type map<K, V> = Map<K, V>; //NOTE - Map with dinamic key and value.
type record<K extends string | number | symbol, V> = Record<K, V>; //NOTE - an object with dinamic keys and values.
type obj = Object; //NOTE - is a plain object, instead of Object you can write {}.

//NOTE - Primitive structures
type str = string;
type num = number;
type bool = boolean;
//Etc

//SECTION Complex structures
type stack<T> = T[]; //NOTE - Using an array to represent a stack (pile)
type queue<T> = T[]; //NOTE -Using an array to represent a queue
type LinkedList<T> = {
	value: T;
	next: LinkedList<T> | null;
}; //NOTE - Defining a LinkedList type

type Tree<T> = {
	value: T;
	children: Tree<T>[];
}; //NOTE - Defining a Tree type

type Graph<T> = {
	nodes: T[];
	edges: Map<T, T[]>;
}; //NOTE - Defining a Graph type

type HashTable<K extends string | number | symbol, V> = {
    [key in K]: V;
}; //NOTE - Defining a HashTable type