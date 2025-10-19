import { KGServiceEventType } from './kgserviceEventType';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/haley-ai-kg#MatrixServiceEventType
 */
export class MatrixServiceEventType extends KGServiceEventType {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/haley-ai-kg#MatrixServiceEventType';
  }

  /**
   * Get property definitions for MatrixServiceEventType
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
