import { FileNode } from '../vital/fileNode';
import { VitalSignsPropertyDefinition } from '@vital-ai/vital-model-utils';

/**
 * VitalSigns class: http://vital.ai/ontology/vital-aimp#EmailAttachment
 */
export class EmailAttachment extends FileNode {
  public internalID?: string;


  constructor() {
    super();
    this.vitaltype = 'http://vital.ai/ontology/vital-aimp#EmailAttachment';
  }

  /**
   * Get property definitions for EmailAttachment
   */
  getPropertyDefinitions(): VitalSignsPropertyDefinition[] {
    return [
      ...super.getPropertyDefinitions(),
      {
        propertyURI: 'http://vital.ai/ontology/vital-aimp#hasInternalID',
        tsPropertyName: 'internalID',
        type: 'string',
        required: false
      }
    ];
  }


}
