/*jslint browser */
(function () {
    "use strict";

    function init() {
        const form = document.getElementById("order-form");
        const productSelect = document.getElementById("product");
        const quantityInput = document.getElementById("quantity");
        const resultBox = document.getElementById("result");
        const errorBox = document.getElementById("error-message");
        const quantityPattern = /^\d+$/;

        function showError(message) {
            errorBox.textContent = message;
            errorBox.hidden = false;
            resultBox.textContent = "";
        }

        function hideError() {
            errorBox.textContent = "";
            errorBox.hidden = true;
        }

        function calculateOrder() {
            const rawValue = quantityInput.value.trim();

            if (!quantityPattern.test(rawValue)) {
                showError(
                    "Введите целое неотрицательное число без букв и символов."
                );
                return;
            }

            const quantity = parseInt(rawValue, 10);
            const price = parseInt(productSelect.value, 10);

            if (quantity <= 0) {
                showError("Количество должно быть больше нуля.");
                return;
            }

            hideError();
            resultBox.textContent = "Стоимость заказа: " +
                    (price * quantity) + " ₽";
        }

        form.addEventListener("submit", function (event) {
            event.preventDefault();
            calculateOrder();
        });

        quantityInput.addEventListener("input", hideError);
    }

    window.addEventListener("DOMContentLoaded", init);
}());
