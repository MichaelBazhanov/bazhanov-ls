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
									user
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
import linkA from "../../components/link";
import icon from "../../components/icon";
import tag from "../../components/tag";

export default {
	//локальная регисрация компонента
	components: {
		card,
		appButton,
		appInput,
		squareButton,
		linkA,
		icon,
		tag,
		dnd,
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
	}

};
</script>

<style lang="postcss" scoped src="./reviews.pcss"></style>