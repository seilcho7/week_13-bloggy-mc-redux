import { connect } from 'react-redux';
import BlogList from '../components/BlogList';
import { selectPost } from '../actions';
import selectedid from '../reducers/selectedid';

// translate redux state to react props
const mapStateToProps = (state) => {
    return {
        // react-prop: redux-state
        posts: state.posts
    }
}

// translate redux dispatch into react props
// (we don't need this...yet)
const mapDispatchToProps = (dispatch) => {
    return {
        // react-prop: redux-dispatch
        handleClick: (id) => {
            dispatch(selectPost(id));
        }
    }
};

const makeBlogListSmart = connect(
    mapStateToProps,
    mapDispatchToProps
);
const SmartBlogList = makeBlogListSmart(BlogList);

export default SmartBlogList;
