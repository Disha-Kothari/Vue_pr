<script setup>

const props=defineProps({
    comments:{
        type:Array,
        default:()=>[]
    }
})
</script>
    <template>
        <div v-for="(comment,index) in comments" :key="index">
            <li>
            <span>{{ comment.author }}
            <p>{{ comment.comment }}</p>
            </span></li>
            <ul class="comments">
            <recusrsiveComments2 v-bind="{comments:comment.comments}"  v-if="comments.length"></recusrsiveComments2>
            </ul>
        </div>    
</template>