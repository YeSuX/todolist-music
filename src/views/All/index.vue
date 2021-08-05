<template>
  <div class="bodyContent">
    <div class="title">全部</div>
    <div class="completed">
      <div class="completed-detail">1项已完成</div>
      <div class="completed-show">显示</div>
    </div>
    <slider />
    <div class="list-item" v-for="n in 3" :key="n">
      <div class="list-title">列表{{n}}</div>
      <div class="items" v-for="j in 5" :key="j">
        <div class="checkbox">
          <div class="checkbox__1">
            <input :id="n+'-'+j" type="checkbox" />
            <label :for="n+'-'+j"> <i class="fa fa-check"></i></label>
          </div>
        </div>
        <div class="detail">
          <div class="detail-content">
            <textarea
              type="text"
              class="form__input"
              placeholder="Type anything..."
              :value="'列表'+n+'  事项'+j"
            />
          </div>
          <slider />
        </div>
      </div>
      <div class="items">
        <div class="icon__settings">
          <i class="fa fa-plus-square-o" aria-hidden="true"></i>
        </div>
        <div class="detail">
          <textarea
            class="form__input"
            type="text"
            placeholder="Type anything..."
          />
          <slider />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Slider from "@/components/Slider";
export default {
  name: "all",
  components: {
    Slider,
  },
};
</script>

<style lang="scss" scoped>
.icon__settings {
  width: 7rem;
  display: flex;
  justify-content: center;
}
.icon__settings i {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--greyDark);
  transition: 0.3s ease;
  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
    -0.2rem -0.2rem 0.5rem var(--white);
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2rem;
  width: 2.8rem;
  height: 2.8rem;
}
.title {
  font-size: 3rem;
  color: var(--greyDark);
  margin: 1rem 0;
}
.completed {
  font-size: 1.2rem;
  display: flex;
  justify-content: space-between;
  color: var(--greyDark-1);
  .completed-show {
    cursor: pointer;
    &:hover {
      color: var(--primary);
    }
  }
}

.list-title {
  font-size: 1.8rem;
  color: var(--primary);
  margin-bottom: 1rem;
}

.items {
  display: flex;
  .checkbox input {
    display: none;
  }
  .checkbox__1 {
    width: 6rem;
    display: flex;
    justify-content: center;
  }
  .checkbox__1 label {
    box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
      -0.2rem -0.2rem 0.5rem var(--white);
    cursor: pointer;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    width: 2.8rem;
    height: 2.8rem;
  }
  .checkbox__1 label:hover i {
    color: var(--primary);
  }
  .checkbox__1 label i {
    font-size: 1.8rem;
    font-weight: 700;
    color: var(--greyDark);
    transition: 0.3s ease;
  }
  .checkbox__1 input:checked ~ label {
    box-shadow: inset 0.2rem 0.2rem 0.5rem var(--greyLight-2),
      inset -0.2rem -0.2rem 0.5rem var(--white);
  }
  .checkbox__1 input:checked ~ label i {
    color: var(--primary);
  }
  .detail {
    width: 100%;
    .content-input {
      width: 100%;
    }
  }
}
.form__input {
  width: 100% !important;
  min-height: 3rem;
  border: none;
  border-radius: 1rem;
  font-size: 1.4rem;
  padding-left: 1.4rem;
  background: none;
  font-family: inherit;
  color: var(--greyDark);
}
.form__input::-moz-placeholder {
  color: var(--greyLight-3);
}
.form__input:-ms-input-placeholder {
  color: var(--greyLight-3);
}
.form__input::placeholder {
  color: var(--greyLight-3);
}
.form__input:focus {
  outline: none;
  box-shadow: 0.3rem 0.3rem 0.6rem var(--greyLight-2),
    -0.2rem -0.2rem 0.5rem var(--white);
}
</style>