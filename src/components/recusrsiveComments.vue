<script setup>
// import jsondata from './comments1.json'

// jsondata.forEach(x => { console.log(x.auther, x.comments); });

const props=defineProps({
    author:String,
    comment:String,
    comments:{
        type:Array,
        default:()=>[]
    }
})
</script>

<template>
<li>
    <span>{{ author }}
    <p>{{ comment }}</p>
    </span>
    <ul v-if="comments.length">
        <div v-for="(commentItem,index) in comments" :key="index" >
            <recusrsiveComments v-bind="{
                author:commentItem.author,
                comment:commentItem.comment,
                comments:commentItem.comments}"></recusrsiveComments>
        </div>    
    </ul>
</li>

<!-- <div >
    <div v-for="(comment,index) in comments" :key="index" >
            <span>{{ author }}  </span>
                {{ comment }}
           <commetnts v-bind="{author:comment.author}"></commetnts>
</div>

</div>
    </li>
</ul> -->

</template>