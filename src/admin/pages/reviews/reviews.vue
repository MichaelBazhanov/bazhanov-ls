<template>
	<div class="reviews-page-component">

		<div class="page-content">

			<div class="container">
				<div class="header">
					<div class="title">Блок "Отзывы"</div>
				</div>

				<div class="review-edit" v-if="editNewReviews || editOldReviews">
					<card
						title="Новый отзыв"
					>
						<div slot="content" class="review">
							<div class="review-left review-item">
								<dnd
									:imgSrc_="review.photo"
									@onLoadFile='file = $event'
									@onLoadImg='review.photo = $event'
									not_dnd
								/>
							</div>
							<div class="review-right review-item">
								<div class="review-inp-group">
									<app-input v-model="review.author" title="Имя автора" class="review-inp"/>
									<app-input v-model="review.occ" title="Титул автора" class="review-inp"/>
								</div>
									<app-input v-model="review.text" title="Отзыв" fieldType="textarea" class="review-area"/>
									<div class="review-btns">
										<appButton title="Отмена" plain @click="reviewNo" />
										<appButton title="СОХРАНИТЬ" @click="reviewYes" />
									</div>
							</div>
						</div>
					</card>
				</div>

				<div class="reviews">
					<div class="reviews-wrap">
						<div class="reviews-item">
							<squareButton
								type="square"
								title="Добавить работу"
								@click="addReview"
							/>
						</div>
					</div>

					<div v-for="review in reviews" :key="review.id" class="reviews-wrap">
						<div class="reviews-item">
							<!-- <div class="tags-wrap">
								<img class="item-img" :src="reviews.photo" :alt="reviews.photo">

								<div class="item-tags">
									<tag v-for="(item, idx) in work.techs.split(', ')" :key="idx" :title="item" class="tipography-works" />
								</div>
							</div> -->
							<div class="item-user">
								<img :src="review.photo" alt="">
								<h2 class="item-title">{{review.author}}</h2>
								<h2 class="item-title">{{review.occ}}</h2>
							</div>
							<div class="item-wrap">
								<p class="item-text" >{{review.text}}</p>
								<div class="item-btns">
									<icon @click="editReview(review)" title="Править" symbol="pencil" />
									<icon @click="deleteReview(review)" title="Удалить" symbol="cross" />
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>

		</div>
	</div>
</template>


<script>
// import "../styles/main.pcss"; //такой вариант подключения стилей возможен(подключается все, но все не нужно)
import card from "../../components/Card";
import dnd from "../../components/dnd";
import appButton from "../../components/button";
import squareButton from "../../components/button/types/squareBtn";
import appInput from "../../components/input";
import icon from "../../components/icon";

export default {
	//локальная регисрация компонента
	components: {
		card,
		appButton,
		appInput,
		squareButton,
		icon,
		dnd,
	},
	computed: {
		reviews() {
			return [1,2,3]
		}
	},
	data() {
		return {
			file: {},
			editNewReviews: true,
			editOldReviews: false,
			review: {
				photo: '',
				author: '',
				occ: '',
				text: '',
			}
		};
	},
	methods: {
		reviewNo() {
			console.log('reviewNo');
		},
		reviewYes() {
			console.log('reviewYes');
		},
		onLoadFile() {},
		onLoadImg() {},
		addReview() {},
		editReview() {},
		deleteReview() {},
	}

};
</script>

<style lang="postcss" scoped src="./reviews.pcss"></style>