import { VITAL_GraphContainerObject } from './vitalGraphcontainerobject';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-core#SqlResultRow
 */
export class SqlResultRow extends VITAL_GraphContainerObject {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-core#SqlResultRow';
  }

  /**
   * Get property definitions for SqlResultRow
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
