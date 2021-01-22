<template>
	<div class="reviews-page-component">

		<div class="page-content">

			<div class="container">
				<div class="header">
					<div class="title">Блок "Отзывы"</div>
				</div>

				<transition name="fade">
					<div class="review-edit" v-if="editNewReview || editOldReview">
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

										@onError='onError($event)'
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
				</transition>

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

						<card class="reviews-item">

							<div class="item-user" slot="title">
								<!-- <avatar :size="3.4" src="https://picsum.photos/300/300" class="item-img"/> -->
								<avatar :size="'3.4'" :src="review.photo"  class="item-img"/>

								<div class="item-content">
									<h2 class="item-author">{{review.author}}</h2>
									<h4 class="item-occ">{{review.occ}}</h4>
								</div>
							</div>

							<div class="item-wrap" slot="content">
								<p class="item-text" >{{review.text}}</p>
								<div class="item-btns">
									<icon @click="editReview(review)" title="Править" symbol="pencil" />
									<icon @click="deleteReview(review)" title="Удалить" symbol="cross" />
								</div>
							</div>

						</card>

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
import avatar from "../../components/avatar";

import { mapActions, mapState, mapGetters } from 'vuex';
import reviews from "../../store/modules/reviews"; //модуль динамически импортируется и ругистрируестя

export default {
	//локальная регисрация компонента
	components: {
		card,
		appButton,
		appInput,
		squareButton,
		icon,
		dnd,
		avatar,
	},
	created() {
		this.$store.registerModule('reviews', reviews); //динамически импортируемый модуль ругистрируестя
		this.fetchReviewsAction();//vuex-action
	},
	destroyed() {
		this.$store.unregisterModule('reviews'); //модуль динамически импортируемый отменяет ругистрирацию
	},
	computed: {
		...mapState("reviews", {
			reviews: state => state.data
		}),
	},
	data() {
		return {
			file: {},
			editNewReview: false,
			editOldReview: false,
			review: {
				photo: '',
				author: '',
				occ: '',
				text: '',
			}
		};
	},
	methods: {
		...mapActions({
			showTooltip: "tooltips/show",
			fetchReviewsAction: "reviews/fetch",
			addReviewAction: "reviews/add",
			editReviewAction: "reviews/edit",
			removeReviewAction: "reviews/remove",
		}),
		async reviewYes() {
			console.log('reviewYes');

			if (this.editNewReview) {
				this.editNewReview = false;
				await this.addReviewAction({
					...this.review,
					photo: this.file
				});//vuex-action
				this.file = {}
			}

			if (this.editOldReview) {
				this.editOldReview = false;
				await this.editReviewAction({
					...this.review,
					photo: this.file
				});//vuex-action
				this.file = {}
			}

			this.clearCurrentReview()//methods
		},
		reviewNo() {
			console.log('reviewNo');
			this.editNewReview = false;
			this.editOldReview = false;
			this.file = {}

			this.clearCurrentReview()//methods
		},
		addReview() {
			this.editNewReview = true;

			this.clearCurrentReview()//methods
		},
		editReview(review) {
			this.editOldReview = true;
			this.review = {
				...review,
			}//отображаем как ТЕКУЩИЙ review
		},
		deleteReview(review) {
			this.editNewReview = false;
			this.editOldReview = false;

			this.removeReviewAction(review)//vuex-action

			this.clearCurrentReview()//methods
		},
		onLoadFile() {},
		onLoadImg() {},
		clearCurrentReview() {
			//очищаем review все поля
			Object.keys(this.review).forEach(e => this.review[e] = '')
		},
		onError(e) {
			this.showTooltip({ //вызываем туллтип
				text: `${e.text}`,
				type: `${e.type}`
			})
		}
	}

};
</script>

<style lang="postcss" scoped src="./reviews.pcss"></style>