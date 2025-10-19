import { FileNode } from '../vital/fileNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#Media
 */
export class Media extends FileNode {



  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#Media';
  }

  /**
   * Get property definitions for Media
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),

    ];
  }


}
