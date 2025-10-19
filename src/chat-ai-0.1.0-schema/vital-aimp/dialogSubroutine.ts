import { DialogAction } from './dialogAction';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#DialogSubroutine
 */
export class DialogSubroutine extends DialogAction {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#DialogSubroutine';
  }

  /**
   * Get property definitions for DialogSubroutine
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
