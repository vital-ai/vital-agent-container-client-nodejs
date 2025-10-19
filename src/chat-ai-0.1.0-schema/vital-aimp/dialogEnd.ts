import { DialogElement } from './dialogElement';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogEnd
 */
export class DialogEnd extends DialogElement {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogEnd';
  }

  /**
   * Get property definitions for DialogEnd
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
