import { DialogElement } from './dialogElement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogQuestionEnd
 */
export class DialogQuestionEnd extends DialogElement {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogQuestionEnd';
  }

  /**
   * Get property definitions for DialogQuestionEnd
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
