import React from "react";


export default function PropertyLogger(WrapperComponent: any) {
    class ClassWrapper extends React.Component<any, any> {

        componentDidMount() {
            console.log("~~ propertyLogger: Start didMount ~~");
            console.log("Current props:", this.props);
            console.log("~~ propertyLogger: End didMount ~~");
        }

        componentDidUpdate(prevProps: any) {
            console.log("~~ propertyLogger: Start Update ~~");
            console.log("Crevious props:", prevProps);
            console.log("current props:", this.props);
            console.log("~~ propertyLogger: End Update ~~");
        }

        render() {
            return <WrapperComponent {...this.props}></WrapperComponent>
        }
    }
    return ClassWrapper;
}