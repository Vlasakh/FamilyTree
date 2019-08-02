function deletePerson(context, { name, nodeId }) {
    let treeData = context.state.treeData;

    delete treeData[nodeId];

    context.setState({ treeData: { ...treeData } });
}

export default deletePerson;
